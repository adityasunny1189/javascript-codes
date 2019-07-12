function Mygrade(marks_obtained, total_marks) {

    if (typeof(marks_obtained)==='number' && typeof(total_marks)==='number'){

        if (marks_obtained > total_marks)
        {
            return 'Marks obtained can not be greater than total marks';
        }
        else{
            if (marks_obtained < 0 || total_marks < 0)
            {
                return 'Marks cant be negative'
            }
            else {
                var percentage = (marks_obtained/total_marks) * 100;
                if (percentage > 90){
                    return 'A';
                }
                else if (percentage > 80 && percentage < 90){
                    return 'B';
                }
                else if (percentage > 70 && percentage < 80){
                    return 'C';
                }
                else if (percentage > 60 && percentage < 70){
                    return 'D';
                }
                else if (percentage > 50 && percentage < 60){
                    return 'E';
                }
                else{
                    return 'F';
                }
            }
        }
    }
    else if (typeof(marks_obtained)==='undefined' || typeof(total_marks)==='undefined'){
        return 'please input a valid marks';
    }
    else {
        return 'marks are always numbers';
    }
}

var result = Mygrade(465, 500);
console.log(result);