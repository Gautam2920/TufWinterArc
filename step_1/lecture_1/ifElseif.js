function studentGrade(marks) {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter marks: ", (marks) => {
        marks = parseInt(marks);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid marks");
            rl.close();
            return;
        }

        if (marks >= 90) console.log("Grade A");
        else if (marks >= 70) console.log("Grade B");
        else if (marks >= 50) console.log("Grade C");
        else if (marks >= 35) console.log("Grade D");
        else console.log("Fail");

        rl.close();
    });
}

studentGrade();
