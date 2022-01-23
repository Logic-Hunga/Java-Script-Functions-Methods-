Process.stdin('data', (input) => {
    let input_data = input.toString().trim()

    if (input_data.toLowerCase() === 'exit') {
        process.exit();
    }
    else {
        let number = Number(input_data);
        if ((number % 2) == 0) {
            process.stdout.write('input number is even')
        }
    }
})