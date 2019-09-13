/*
 **** JS file to build the project details component ****
 */

const Details = (id) => {
    // empty main and append a container
    $('#main').empty();

    createElement('div', '#main', 'append', attributes = [{
        'name': 'class',
        'value': 'container'
    }, {
        'name': 'id',
        'value': 'detailsContainer'
    }, {
        'name': 'tabindex',
        'value': '0'
    }]);

    // send id with post
    $.post('back-end/projectTracker.php?request=details', {
        id: '' + id + ''
    }, function (data) {
        // start tree of elements 
        //  start with row then append a column into the row
        createElement('div', '#detailsContainer', 'append', attributes = [{
            'name': 'class',
            'value': 'row'
        }, {
            'name': 'id',
            'value': 'rowContainer'
        }]);

        createElement('div', '#rowContainer', 'append', attributes = [{
            'name': 'class',
            'value': 'col-xs-12 col-md-8 col-lg-8 mx-auto border border-info '
        }, {
            'name': 'id',
            'value': 'colContainer'
        }, {
            'name': 'onclick',
            'value': 'check(this.clientWidth, this.clientHeight)'
        }]);

        // handle data that was called back
        const dataObj = JSON.parse(data);

        // create heading
        createElement('h1', '#colContainer', 'append', attributes = [{
            'name': 'class',
            'value': 'h4 text-center'
        }, {
            'name': 'html',
            'value': dataObj[0].title
        }, {
            'name': 'id',
            'value': 'detailsHeading'
        }, {
            'name': 'tabindex',
            'value': '-1'
        }]);
        $('#detailsHeading').focus();

        // create navigation 
        detailsNav(dataObj);
    });

}

// component for detailsNav
const detailsNav = (dataObj) => {
    createElement('nav', '#colContainer', 'append', attributes = [{
        'name': 'class',
        'value': 'navbar navbar-expand-lg  navbar-dark bg-primary'
    }, {
        'name': 'id',
        'value': 'detailsNav'
    }]);

    createElement('button', '#detailsNav', 'append', attributes = [{
        'name': 'class',
        'value': 'navbar-toggler'
    }, {
        'name': 'id',
        'value': 'navbar-toggler-details'
    }, {
        'name': 'data-toggle',
        'value': 'collapse'
    }, {
        'name': 'type',
        'value': 'button'
    }, {
        'name': 'aria-expand',
        'value': 'false'
    }, {
        'name': 'aria-label',
        'value': 'Toggle Navigation'
    }, {
        'name': 'data-target',
        'value': '#detailsNavCont'
    }]);

    createElement('div', '#detailsNav', 'append', attributes = [{
        'name': 'id',
        'value': 'detailsNavCont'
    }, {
        'name': 'class',
        'value': 'collapse navbar-collapse container'
    }]);

    createElement('ul', '#detailsNavCont', 'append', attributes = [{
        'name': 'class',
        'value': 'navbar-nav mx-auto row'
    }, {
        'name': 'id',
        'value': 'ulDetails'
    }, {
        'name': 'onclick',
        'value': 'check(this.clientWidth, this.clientHeight)'
    }]);

    const navArr = ["To Do's", "File Tracker", "Issues", "Time Spent", "Documentation"];
    navArr.map((item, i) => {
        createElement('li', '#ulDetails', 'append', attributes = [{
            'name': 'class',
            'value': 'nav-item col text-center mx-auto'
        }, {
            'name': 'id',
            'value': 'nav-item-' + i
        }]);

        createElement('a', '#ulDetails', 'append', attributes = [{
            'name': 'class',
            'value': 'nav-link'
        }, {
            'name': 'id',
            'value': 'nav-link-' + i
        }, {
            'name': 'href',
            'value': '#'
        }, {
            'name': 'html',
            'value': item
        }]);
    });

    Overview(dataObj);
}

const Overview = (dataObj) => {
    // start overview of project details
    createElement('div', '#detailsContainer', 'append', attributes = [{
        'name': 'class',
        'value': 'row'
    }, {
        'name': 'id',
        'value': 'overViewRow'
    }]);

    createElement('div', '#overViewRow', 'append', attributes = [{
        'name': 'class',
        'value': 'col-xs-12 col-md-10 col-lg-10 mx-auto'
    }, {
        'name': 'id',
        'value': 'overViewColContainer'
    }, {
        'name': 'onclick',
        'value': 'check(this.clientWidth, this.clientHeight)'
    }]);

    createElement('h2', '#overViewColContainer', 'append', attributes = [{
        'name': 'class',
        'value': 'h5 text-center'
    }, {
        'name': 'id',
        'value': 'overViewHeading'
    }, {
        'name': 'html',
        'value': 'Overview'
    }]);

    ToDos(dataObj);
}

const ToDos = (dataObj) => {
    createElement('div', '#detailsContainer', 'append', attributes = [{
        'name': 'class',
        'value': 'row'
    }, {
        'name': 'id',
        'value': 'todoRow'
    }]);

    createElement('div', '#todoRow', 'append', attributes = [{
        'name': 'class',
        'value': 'col-xs-12 col-md-10 col-lg-6 '
    }, {
        'name': 'id',
        'value': 'todoCol'
    }, {
        'name': 'onclick',
        'value': 'check(this.clientWidth, this.clientHeight)'
    }]);

    createElement('h3', '#todoCol', 'append', attributes = [{
        'name': 'class',
        'value': 'h6 text-center'
    }, {
        'name': 'id',
        'value': 'todoHeading'
    }, {
        'name': 'html',
        'value': "To Do's"
    }]);

    createElement('div', '#todoCol', 'append', attributes = [{
        'name': 'class',
        'value': 'table-responsive'
    }, {
        'name': 'id',
        'value': 'todoTableCont'
    }]);

    createElement('table', '#todoTableCont', 'append', attributes = [{
        'name': 'class',
        'value': 'table'
    }, {
        'name': 'id',
        'value': 'todoTable'
    }, {
        'name': 'role',
        'value': 'table'
    }]);

    let thArr = ['Subject', 'Hours', 'Last Updated'];
    thArr.forEach(th => {
        createElement('th', '#todoTable', 'append', attributes = [{
            'name': 'html',
            'value': th
        }]);
    });

    dataObj.map((data, i) => {
        createElement('tr', '#todoTable', 'append', attributes = [{
            'name': 'id',
            'value': 'todoSubRow' + i
        }]);

        createElement('td', '#todoSubRow' + i, 'append', attributes = [{
            'name': 'html',
            'value': data.subject
        }]);

        createElement('td', '#todoSubRow' + i, 'append', attributes = [{
            'name': 'html',
            'value': data.todo_spentTime
        }]);

        createElement('td', '#todoSubRow' + i, 'append', attributes = [{
            'name': 'html',
            'value': data.todo_lastUpdated
        }]);

        createElement('div', '#todoTableCont', 'append', attributes = [{
            'name': 'class',
            'value': 'btn btn-primary btn-sm'
        }, {
            'name': 'id',
            'value': 'manageTodo ' + i
        }, {
            'name': 'title',
            'value': 'Manage ' + data.subject
        }, {
            'name': 'html',
            'value': 'Manage'
        }, {
            'name': 'role',
            'value': 'button'
        }]);
    });
}