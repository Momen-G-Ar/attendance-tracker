let array = localStorage.getItem(JSON.parse(array)) ? localStorage.getItem(JSON.parse(array)) : [];

render();

createDate = () => {
    `

    `
}

render = () => {
    
    `
    <!-- This row will be a function called in the start of JS -->
    <div class="mainDiv">
        <table border="0" class="Table" cellspacing="0" cellpadding="5px">
            <tbody>
                <tr>
                    <td class="title" colspan="6">
                        Attendance for ${new Date().getDate}
                    </td>
                </tr>
                <tr>
                    <td class="head NUM">
                        Num
                    </td>
                    <td class="head SID">
                        Student ID
                    </td>
                    <td class="head SN">
                        Student Name
                    </td>
                    <td class="head" colspan="3">
                        Attendance
                    </td>
                </tr>



                <!-- The next row has cells each cell will have one of the object attributes  -->
                <!-- This row will build with JS -->
                <tr>
                    <td class="cell Left">

                    </td>
                    <td class="cell">

                    </td>
                    <td class="cell">

                    </td>
                    <!-- Each cell will have specific function -->
                    <td class="cell">
                        <div class="img">
                            <div class="button">
                                <img src="images/Correct.jpg" alt="Correct Image" class="images Correct">
                            </div>
                        </div>
                    </td>
                    <td class="cell">
                        <div class="img">
                            <div class="button">
                                <img src="images/Forbidden.jpg" alt="Forbidden Image" class="images Forbidden">
                            </div>
                        </div>
                    </td>
                    <td class="cell">
                        <div class="img">
                            <div class="button">
                                <img src="images/late.png" alt="Late IMage" class="images Late">
                            </div>
                        </div>
                    </td>


                </tr>
                
                


            </tbody>
            <!-- This row have the statistics also build in JS -->
            <tr>
                <td colspan="3">

                </td>
                <td class="bottom">

                </td>
                <td class="bottom">

                </td>
                <td class="bottom">
                    
                </td>
            </tr>
        </table>
    </div>
    
    `
}
