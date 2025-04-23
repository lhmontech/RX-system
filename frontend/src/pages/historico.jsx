import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, getGridStringOperators } from '@mui/x-data-grid'; // Importa o DataGrid do MUI em Pt-br
import { Button, TextField, Box } from '@mui/material'; // Para os componentes de UI
import * as XLSX from 'xlsx';

const Relatorios = () => {
    const [registros, setRegistros] = useState([]);
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');

    useEffect(() => {
        const buscarRegistros = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/registros');
                setRegistros(res.data.slice(0, 20)); // Mostra os 20 mais recentes
            } catch (err) {
                console.error('Erro ao buscar registros:', err);
            }
        };

        buscarRegistros();
    }, []);

    const buscarPorPeriodo = async () => {
        if (!dataInicio || !dataFim) {
            alert('Preencha as duas datas!');
            return;
        }
        try {
            const res = await axios.get(`http://localhost:3001/api/registros?inicio=${dataInicio}&fim=${dataFim}`);
            setRegistros(res.data);
        } catch (err) {
            console.error('Erro ao buscar registros por período:', err);
        }
    };

    const formatarData = (isoString) => {
        if (!isoString) return '';
        const data = new Date(isoString);
        return data.toLocaleDateString('pt-BR');
      };
    
    const onlyContainsOperator = getGridStringOperators().filter(
        (op) => op.value === 'contains'
    );

    const localeTextPTBR = {
         // Geral
        noRowsLabel: 'Nenhuma linha',
        noResultsOverlayLabel: 'Nenhum resultado encontrado.',
        errorOverlayDefaultLabel: 'Ocorreu um erro.',

        // Export selector toolbar button text
        toolbarExport: 'Exportar',
        toolbarExportLabel: 'Exportar',

        // Columns panel text
        columnsPanelDragIconLabel: 'Reordenar coluna',
        columnsPanelShowAllButton: 'Mostrar todas',
        columnsPanelHideAllButton: 'Ocultar todas',

        // Filter panel text
        filterPanelDeleteIconLabel: 'Excluir',
        filterPanelOperator: 'Operador',
        filterPanelColumns: 'Colunas',
        filterPanelInputLabel: 'Valor',

        // Filter operators text
        filterOperatorContains: 'Contém',

        // Column menu text
        columnMenuLabel: 'Menu',
        columnMenuFilter: 'Filtrar',
        columnMenuUnsort: 'Cancelar ordenação',
        columnMenuSortAsc: 'Ordenar ascendente',
        columnMenuSortDesc: 'Ordenar descendente',

    };

    const exportarParaExcel = () => {
        const ws = XLSX.utils.json_to_sheet(registros);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Registros');
        XLSX.writeFile(wb, 'relatorio.xlsx');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Relatórios</h2>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                    type="date"
                    value={dataInicio}
                    onChange={(e) => setDataInicio(e.target.value)}
                    variant="outlined"
                    size="small"
                />
                <TextField
                    type="date"
                    value={dataFim}
                    onChange={(e) => setDataFim(e.target.value)}
                    variant="outlined"
                    size="small"
                />
                <Button variant="contained" onClick={buscarPorPeriodo} style={{ marginTop: '20px'}}>
                    Buscar
                </Button>
            </Box>    

            <Button variant="contained" onClick={exportarParaExcel} style={{ marginTop: '20px' }}>
                Exportar para Excel
            </Button>

            <div style={{ height: 400, width: '100%', marginTop: '20px' }}>
                <DataGrid
                    pagination={false}
                    hideFooter
                    rows={registros}
                    columns={[
                        { field: 'nomepaciente', headerName: 'Nome', width: 150, filterOperators: onlyContainsOperator },
                        { field: 'sexo', headerName: 'Sexo', width: 100, filterOperators: onlyContainsOperator },
                        { field: 'datanascimento', headerName: 'Data Nasc.', width: 130, filterOperators: onlyContainsOperator, renderCell: (params) => <span>{formatarData(params.value)}</span> },
                        { field: 'exame', headerName: 'Exame', width: 130, filterOperators: onlyContainsOperator },
                        { field: 'qtdincidencias', headerName: 'Incid.', width: 60, filterOperators: onlyContainsOperator },
                        { field: 'origem', headerName: 'Origem', width: 120, filterOperators: onlyContainsOperator },
                        { field: 'reexposicao', headerName: 'Reexposição', width: 150, filterOperators: onlyContainsOperator },
                        { field: 'motivo', headerName: 'Motivo', width: 150, filterOperators: onlyContainsOperator },
                        { field: 'datapedido', headerName: 'Data Realizada', width: 130, filterOperators: onlyContainsOperator, renderCell: (params) => <span>{formatarData(params.value)}</span>},
                        { field: 'horapedido', headerName: 'Hora Pedido', width: 130, filterOperators: onlyContainsOperator },
                        { field: 'horarealizada', headerName: 'Hora Realizada', width: 130, filterOperators: onlyContainsOperator },
                        { field: 'nometecnico', headerName: 'Técnico', width: 130, filterOperators: onlyContainsOperator },
                    ]}
                    localeText={localeTextPTBR}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableColumnSelector
                />
            </div>
        </div>
    );
};

export default Relatorios;
