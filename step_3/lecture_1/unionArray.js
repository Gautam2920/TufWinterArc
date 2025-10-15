function unionArray(nums1, nums2) {
    const result = [];
    let i = 0,
        j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
        } else {
            if (result.length === 0 || result[result.length - 1] !== nums2[j]) {
                result.push(nums2[j]);
            }
            j++;
        }
    }

    while (i < nums1.length) {
        if (result[result.length - 1] !== nums1[i]) result.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        if (result[result.length - 1] !== nums2[j]) result.push(nums2[j]);
        j++;
    }

    return result;
}