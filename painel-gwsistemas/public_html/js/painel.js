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
            criarPopularTable();
        }else if (v === 'card') {
            criarPupularCard();
        }
    });
    
    criarPopularTable();
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
        i = $('<i>').addClass('details fa fa-info-circle');
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