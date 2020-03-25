
$(document).ready(function(){
    $("#submit_button").click(function(event){
        event.preventDefault();
        createTableBody(
            $("#employeeId").val(), 
            $("#employeeName").val(), 
            $('input[name=radio_status]:checked').val(), 
            getJobDescription(), 
            $("#district_select").val());
    });

    function createTableBody(id, name, status, jd, district) {
        var tabletd = undefined; 
        var tableData = undefined;
        var tableDataArray = [id, name, status, jd, district];
    
        var table = $("#table01");
        var tableBody = '<tbody>';
        var tableRow  = '<tr>';
    
        for(var index=0; index<tableDataArray.length; index++){
           tabletd = '<td>';
           tableData = tableDataArray[index];
           tabletd  += tableData + '</td>';
           tableRow += tabletd;
        }
    
        tableRow += '</tr>';
        tableBody = tableRow + '</tbody>';
        table.html(table.html() + tableBody);
    }

    function getJobDescription(){
        var jobDescription    = "";
        var jobDescriptionUx  = $('input[name=UX]:checked').val();
        var jobDescriptionDev = $('input[name=DEV]:checked').val();
        var jobDescriptionDb  = $('input[name=DB]:checked').val();
    
        jobDescription = (jobDescriptionUx ? jobDescriptionUx : '') + 
            (jobDescriptionDev ? ((jobDescriptionUx? ('-' + jobDescriptionDev) : jobDescriptionDev)):'') +
            (jobDescriptionDb ? (((jobDescriptionUx || jobDescriptionDev)? ('-' + jobDescriptionDb) : jobDescriptionDb)):'');
    
        return jobDescription;
    }
});
