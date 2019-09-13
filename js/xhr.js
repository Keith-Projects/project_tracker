const Xhr = (id, href) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let xhrResponse = JSON.parse(xhr.responseText);
            if (id == 'homeCol2-1') {
                allProjectsLayout(xhrResponse);
            } else if (id == 'detailsContainer') {
                allDetailsLayout(xhrResponse);
            }

        }
    };
    xhr.open('GET', href, true);
    xhr.send();
}


const allProjectsLayout = (xhrResponse) => {


    xhrResponse.forEach((projects, i) => {
        // create ul
        createElement('ul', '#homeCol2-1', 'append', attributes = [{
            'name': 'class',
            'value': 'list-group border border-info'
        }, {
            'name': 'id',
            'value': 'ul' + i
        }]);

        // create li for title
        createElement('li', '#ul' + i, 'append', attributes = [{
            'name': 'class',
            'value': 'list-group-item'
        }, {
            'name': 'id',
            'value': i+1
        }, {
            'name': 'html',
            'value': 'Title: <a href="#" id="title' + i + '" >' + projects.title + '</a>'
        }, {
            'name': 'onclick',
            'value': 'getProjectDetails(this.id)'
        }]);

        // create li for subject
        createElement('li', '#ul' + i, 'append', attributes = [{
            'name': 'class',
            'value': 'list-group-item'
        }, {
            'name': 'id',
            'value': 'liSubject' + i
        }, {
            'name': 'html',
            'value': 'Subject:' + projects.subject
        }]);

        // create li for date created
        createElement('li', '#ul' + i, 'append', attributes = [{
            'name': 'class',
            'value': 'list-group-item'
        }, {
            'name': 'id',
            'value': 'liCreated' + i
        }, {
            'name': 'html',
            'value': 'Created: ' + projects.timestamp
        }]);

        // create li for description
        createElement('li', '#ul' + i, 'append', attributes = [{
            'name': 'class',
            'value': 'list-group-item'
        }, {
            'name': 'id',
            'value': 'liDescription' + i
        }, {
            'name': 'html',
            'value': 'Description: ' + projects.description
        }]);
    });


}

const getProjectDetails = (id) => {
    Details(id);
}