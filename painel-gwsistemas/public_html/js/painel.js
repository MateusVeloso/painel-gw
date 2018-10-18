//mudar cor de variavel
//document.documentElement.style.setProperty('--bg-nav', 'red');;
$(function () {
    $(".sortable").sortable({
        handle: ".move"
    });
    $(".sortable").disableSelection();

    $('.details').click(() => {
        alert('Em desenvolvimento!');
    });

    $('#estilo-layout').change(() => {
        var v = $("#estilo-layout option:selected").val();
        if (v === 'table') {
            $('.section-dados').show();
            $('.section-grafico').hide();
            criarPopularTable();
        } else if (v === 'card') {
            $('.section-dados').show();
            $('.section-grafico').hide();
            criarPupularCard();
        } else if (v === 'grafico') {
            $('.section-dados').hide();
            $('.section-grafico').show();
        }
    });

    $('.li-nav-menu-lateral').click((e) => {
        var container = null;
        if (e.target.id === 'filtros') {
            $('.title-filtros').text('Filtros');
            container = $('.container-filtros-filtros');
        } else {
            container = $('.container-filtros-ajustes');
            $('.title-filtros').text('Ajustes');
        }

        $('.section-dados').css('width', 'calc(75% - 40px)');
        $('.section-dica').css('width', 'calc(75% - 40px)');
        $('.nav-menu-lateral').animate({
            'width': '25%'
        }, 250, function () {
            $('.li-nav-menu-lateral').hide();
            $('.fechar-menu-lateral').show();
            //ativando
            container.show();
            $('.title-filtros').show();
        });

    });

    $('.fechar-menu-lateral').click(() => {
        $('.section-dica').css('width', 'calc(100% - 40px)');
        $('.section-dados').css('width', 'calc(100% - 95px)');
        $('.nav-menu-lateral').animate({
            'width': '55px'
        }, 250, function () {
            $('.li-nav-menu-lateral').show();
            $('.fechar-menu-lateral').hide();
        });

        $('.container-filtros').hide();
        $('.title-filtros').hide();
    });

//    criarPopularTable();
    criarPupularCard()();
//    jQuery('.cobre-tudo').show(); jQuery('.container-ajuste-tema').show()
});

const json = {
    item: [
        {
            'veiculo': 'OYQ-9171',
            'cidade': 'Recife-PE',
            'motorista': 'Mateus de Paula Veloso - 10212984411',
            'conhecimento': '4',
            'capacidade': '0,00',
            'total': '15.974,00',
            'ocupacao': '0,00'
        },
        {
            'veiculo': 'ZZZ-111',
            'cidade': 'Olinda-PE',
            'motorista': 'Valoso Mateus - 10212333311',
            'conhecimento': '87',
            'capacidade': '10,00',
            'total': '20.000,00',
            'ocupacao': '10,00'
        },
        {
            'veiculo': 'XXX-1414',
            'cidade': 'Recife-PE',
            'motorista': 'João Veloso - 58012984411',
            'conhecimento': '45',
            'capacidade': '950,00',
            'total': '97.974,00',
            'ocupacao': '770,00'
        },
        {
            'veiculo': 'XQA-8585',
            'cidade': 'Recife-PE',
            'motorista': 'Jordam de Veloso Ferraz - 10266684411',
            'conhecimento': '0',
            'capacidade': '210,00',
            'total': '974,00',
            'ocupacao': '140,00'
        },
        {
            'veiculo': 'VVV-1411',
            'cidade': 'Recife-PE',
            'motorista': 'Paulo de Paula Veloso - 10212984411',
            'conhecimento': '580',
            'capacidade': '140,00',
            'total': '974,00',
            'ocupacao': '660,00'
        }

    ]
};

function criarPopularTable() {
    $('.section-dica').hide();
    var section = $('.section-dados').html('');
    var table = $('<table>').addClass('table-dados'), thead = $('<thead>'), tr = $('<tr>'), tbody = $('<tbody>');
    tr.append($('<th>').text('Veiculo'));
    tr.append($('<th>').text('Cidade'));
    tr.append($('<th>').text('Motorista'));
    tr.append($('<th>').text('Conhecimento'));
    tr.append($('<th>').text('Cap. do Veiculo (Kg)'));
    tr.append($('<th>').text('Peso Total (Kg)'));
    tr.append($('<th>').text('% de ocupação'));
    thead.append(tr);
    table.append(thead);
    section.append(table);

    $.each(json.item, (index, obj) => {
        tr = $('<tr>');
        tr.append($('<td>').text(obj.veiculo));
        tr.append($('<td>').text(obj.cidade));
        tr.append($('<td>').text(obj.motorista));
        tr.append($('<td>').text(obj.conhecimento));
        tr.append($('<td>').text(obj.capacidade));
        tr.append($('<td>').text(obj.total));
        tr.append($('<td>').text(obj.ocupacao));
        tbody.append(tr);
    });
    table.append(tbody);
}

function criarPupularCard() {
    $('.section-dica').show();
    var section = $('.section-dados').html(''), container = null, li = null, label = null, ul = null, i = null;
    $.each(json.item, (index, obj) => {
        container = $('<div>').addClass('container-dados ui-state-default');
        i = $('<i>').addClass('details fa fa-info-circle').click(function () {
            alert('Não existe informações adicionais')
        });
        container.append(i);
        i = $('<i>').addClass('move fa fa-arrows-alt');
        container.append(i);
        ul = $('<ul>');
        li = $('<li>').append($('<i>').addClass('icon-caminhao fa fa-truck'));
        li.append($('<label>').text(obj.veiculo));
        ul.append(li);
        li = $('<li>').append($('<i>').addClass('icon-caminhao fa fa-city'));
        li.append($('<label>').text(obj.cidade));
        ul.append(li);
        li = $('<li>').append($('<i>').addClass('icon-caminhao fa fa-address-card'));
        li.append($('<label>').text(obj.motorista));
        ul.append(li);
        li = $('<li>').append($('<i>').addClass('icon-caminhao fa fa-file-alt'));
        li.append($('<label>').text(obj.conhecimento));
        ul.append(li);
        li = $('<li>').append($('<i>').addClass('icon-caminhao fa fa-weight-hanging'));
        li.append($('<label>').text(obj.capacidade + ' / ' + obj.total));
        ul.append(li);
        li = $('<li>').append($('<i>').addClass('icon-caminhao fa fa-percent'));
        li.append($('<label>').text(obj.ocupacao));
        ul.append(li);
        container.append(ul);
        section.append(container);
    });

}

//<td>OYQ-9171</td>
//<td>Recife-PE</td>
//<td>Mateus de Paula Veloso - 10212984411</td>
//<td>4</td>
//<td>0,00</td>
//<td>15.974,22</td>
//<td>0,00</td>-->


/**
 * Set up the chart
 */
var chartData = [{
        "year": 2000,
        "cars": 1587,
        "motorcycles": 650,
        "bicycles": 121
    }, {
        "year": 1995,
        "cars": 1567,
        "motorcycles": 683,
        "bicycles": 146
    }, {
        "year": 1996,
        "cars": 1617,
        "motorcycles": 691,
        "bicycles": 138
    }, {
        "year": 1997,
        "cars": 1630,
        "motorcycles": 642,
        "bicycles": 127
    }, {
        "year": 1998,
        "cars": 1660,
        "motorcycles": 699,
        "bicycles": 105
    }, {
        "year": 1999,
        "cars": 1683,
        "motorcycles": 721,
        "bicycles": 109
    }, {
        "year": 2000,
        "cars": 1691,
        "motorcycles": 737,
        "bicycles": 112
    }, {
        "year": 2001,
        "cars": 1298,
        "motorcycles": 680,
        "bicycles": 101
    }, {
        "year": 2002,
        "cars": 1275,
        "motorcycles": 664,
        "bicycles": 97
    }, {
        "year": 2003,
        "cars": 1246,
        "motorcycles": 648,
        "bicycles": 93
    }, {
        "year": 2004,
        "cars": 1218,
        "motorcycles": 637,
        "bicycles": 101
    }, {
        "year": 2005,
        "cars": 1213,
        "motorcycles": 633,
        "bicycles": 87
    }, {
        "year": 2006,
        "cars": 1199,
        "motorcycles": 621,
        "bicycles": 79
    }, {
        "year": 2007,
        "cars": 1110,
        "motorcycles": 210,
        "bicycles": 81
    }, {
        "year": 2008,
        "cars": 1165,
        "motorcycles": 232,
        "bicycles": 75
    }, {
        "year": 2009,
        "cars": 1145,
        "motorcycles": 219,
        "bicycles": 88
    }, {
        "year": 2010,
        "cars": 1163,
        "motorcycles": 201,
        "bicycles": 82
    }, {
        "year": 2011,
        "cars": 1180,
        "motorcycles": 285,
        "bicycles": 87
    }, {
        "year": 2012,
        "cars": 1159,
        "motorcycles": 277,
        "bicycles": 71
    }];

var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "dataProvider": chartData,
    "rotate": false,
    "marginTop": 10,
    "categoryField": "year",
    "categoryAxis": {
        "gridAlpha": 0.07,
        "axisColor": "#DADADA",
        "startOnAxis": false,
        "title": "Year",
        "guides": [{
                "category": "2001",
                "lineColor": "#CC0000",
                "lineAlpha": 1,
                "dashLength": 2,
                "inside": true,
                "labelRotation": 90,
                "label": "fines for speeding increased"
            }, {
                "category": "2007",
                "lineColor": "#CC0000",
                "lineAlpha": 1,
                "dashLength": 2,
                "inside": true,
                "labelRotation": 90,
                "label": "motorcycle fee introduced"
            }]
    },
    "valueAxes": [{
            "stackType": "regular",
            "gridAlpha": 0.07,
            "title": "Traffic incidents"
        }],
    "graphs": [{
            "id": "g1",
            "type": "column",
            "title": "Cars",
            "valueField": "cars",
            "bullet": "round",
            "lineAlpha": 0,
            "fillAlphas": 0.6,
            "balloonText": "<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>"
        }, {
            "id": "g2",
            "type": "column",
            "title": "Motorcycles",
            "valueField": "motorcycles",
            "lineAlpha": 0,
            "fillAlphas": 0.6,
            "balloonText": "<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>"
        }, {
            "id": "g3",
            "type": "column",
            "title": "Bicycles",
            "valueField": "bicycles",
            "lineAlpha": 0,
            "fillAlphas": 0.6,
            "balloonText": "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>"
        }],
    "legend": {
        "position": "bottom",
        "valueText": "[[value]]",
        "valueWidth": 100,
        "valueAlign": "left",
        "equalWidths": false,
        "periodValueText": "total: [[value.sum]]"
    },
    "chartCursor": {
        "cursorAlpha": 0
    },
    "chartScrollbar": {
        "color": "FFFFFF"
    },
    "responsive": {
        "enabled": true
    }

});

/**
 * Set up demo controls
 * These are for this particular demo purposes only. You don't need this
 * for actual responsive charts
 */
$(function () {
    $(".resizable").resizable({
        animate: true,
        animateEasing: 'swing',
        animateDuration: 250,
        resize: function (event, ui) {
            $('#dims').html(ui.size.width + 'x' + ui.size.height + 'px');
        },
        stop: function (event, ui) {
            setTimeout(function () {
                chart.invalidateSize()
            }, 251);
        }
    });
});

function resize(dim, dir, h) {
    /**
     * Set appropriate container size
     */
    var container = $('.resizable');
    if ('d' == dim)
        container.css({'width': dir, 'height': h});
    else if ('w' == dim)
        container.css({'width': container.width() + dir});
    else
        container.css({'height': container.height() + dir});
    $('#dims').html(Math.round(container.width()) + 'x' + Math.round(container.height()) + 'px');

    /**
     * Normally the charts will watch for window resize / orientation chang
     * events to automatically resize themselves.
     *
     * Since we're manipulating the container size manually, we need to
     * trigger chart resize event as well.
     *
     * Normally you won't have to do this.
     */
    chart.invalidateSize();
}