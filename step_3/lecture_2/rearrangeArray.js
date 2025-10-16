function rearrangeArray(nums) {
    const positives = [];
    const negatives = [];

    for (let num of nums) {
        if (num > 0) positives.push(num);
        else negatives.push(num);
    }

    const result = [];
    let i = 0;

    while (i < positives.length) {
        result.push(positives[i]);
        result.push(negatives[i]);
        i++;
    }

    return result;
}