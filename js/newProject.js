/* 
 * Description: js file to store the new project form html components.
 * Author: Keith Blackwelder
 */

 

const newProjectForm = () => {
    // empty main first 
    $('#main').empty();
    // container
    createElement('div', '#main', 'append', attributes = [{
        'name': 'class',
        'value': 'container'
    }, {
        'name': 'id',
        'value': 'newFormContainer'
    }]);

    // row
    createElement('div', '#newFormContainer', 'append', attributes = [{
        'name': 'class',
        'value': 'row'
    }, {
        'name': 'id',
        'value': 'newFormRow'
    }]);

    createElement('div', '#newFormRow', 'append', attributes = [{
        'name': 'class',
        'value': 'col-3'
    }, {
        'name': 'id',
        'value': 'newFormCol'
    }]);

    createElement('h4', '#newFormCol', 'append', attributes = [{
        'name': 'class',
        'value': 'h4 text-center'
    }, {
        'name': 'html',
        'value': 'New Project'
    }]);

    createElement('form', '#newFormCol', 'append', attributes = [{
        'name': 'id',
        'value': 'newProjectForm'
    }, {
        'name': 'action',
        'value': 'back-end/projectTracker.php'
    }, {
        'name': 'method',
        'value': 'post'
    }]);

    createElement('input', '#newProjectForm', 'append', attributes = [{
        'name': 'id',
        'value': 'timeStamp'
    }, {
        'name': 'name',
        'value': 'timeStamp'
    }, {
        'name': 'type',
        'value': 'hidden'
    }, {
        'name': 'value',
        'value': getTimeStamp()
    }]);

    createElement('div', '#newProjectForm', 'append', attributes = [{
        'name': 'class',
        'value': 'form-group'
    }, {
        'name': 'id',
        'value': 'form-group1'
    }]);

    createElement('input', '#form-group1', 'append', attributes = [{
        'name': 'id',
        'value': 'projectTitle'
    }, {
        'name': 'name',
        'value': 'projectTitle'
    }, {
        'name': 'type',
        'value': 'text'
    }, {
        'name': 'class',
        'value': 'form-control'
    }, {
        'name': 'title',
        'value': 'Project Title'
    }, {
        'name': 'required',
        'value': 'true'
    }]);

    createElement('div', '#newProjectForm', 'append', attributes = [{
        'name': 'class',
        'value': 'form-group'
    }, {
        'name': 'id',
        'value': 'form-group2'
    }]);

    createElement('input', '#form-group2', 'append', attributes = [{
        'name': 'id',
        'value': 'projectSubject'
    }, {
        'name': 'name',
        'value': 'projectSubject'
    }, {
        'name': 'type',
        'value': 'text'
    }, {
        'name': 'class',
        'value': 'form-control'
    }, {
        'name': 'title',
        'value': 'Project Subject'
    }, {
        'name': 'required',
        'value': 'true'
    }]);

    createElement('div', '#newProjectForm', 'append', attributes = [{
        'name': 'class',
        'value': 'form-group'
    }, {
        'name': 'id',
        'value': 'form-group3'
    }]);

    createElement('textarea', '#form-group3', 'append', attributes = [{
        'name': 'name',
        'value': 'projectDescription'
    }, {
        'name': 'id',
        'value': 'projectDescription'
    }, {
        'name': 'class',
        'value': 'form-control'
    }, {
        'name': 'placeholder',
        'value': 'Pproject Description...'
    }, {
        'name': 'required',
        'value': 'true'
    }]);

    createElement('div', '#newProjectForm', 'append', attributes = [{
        'name': 'class',
        'value': 'form-group'
    }, {
        'name': 'id',
        'value': 'form-group4'
    }]);

    createElement('input', '#form-group4', 'append', attributes = [{
        'name': 'type',
        'value': 'submit'
    }, {
        'name': 'class',
        'value': 'form-control btn btn-success btn-sm'
    }, {
        'name': 'id',
        'value': 'projectSubmit'
    }, {
        'name': 'value',
        'value': 'Create Project'
    }]);

    // handle submit
    $('#newProjectForm').submit(function (e){
        e.preventDefault();
        let formData = $(this).serialize();
        $.post('back-end/projectTracker.php?request=newproject', formData, function (data){

            if (data == '1'){
                Details();
            }
        });
    });
}

// function to get timestamp
const getTimeStamp = () => {
    let dateObj = new Date();
    let timestamp = dateObj.toLocaleDateString() + ', ' + dateObj.toLocaleTimeString();
    return timestamp;
}
