function countSubstringsWithKDistinct(s, k) {
    function atMostK(k) {
        let count = 0, left = 0;
        const freq = new Map();

        for (let right = 0; right < s.length; right++) {
            freq.set(s[right], (freq.get(s[right]) || 0) + 1);

            while (freq.size > k) {
                freq.set(s[left], freq.get(s[left]) - 1);
                if (freq.get(s[left]) === 0) freq.delete(s[left]);
                left++;
            }

            count += right - left + 1;
        }

        return count;
    }

    return atMostK(k) - atMostK(k - 1);
}
