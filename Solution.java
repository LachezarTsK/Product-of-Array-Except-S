
public class Solution {

    public int[] productExceptSelf(int[] nums) {

        int size = nums.length;
        int[] multiplied = new int[size];

        int product = 1;
        for (int i = 1; i < size; i++) {
            product *= nums[i - 1];
            multiplied[i] = product;
        }

        multiplied[0] = 1;
        product = 1;
        for (int i = size - 2; i >= 0; i--) {
            product *= nums[i + 1];
            multiplied[i] *= product;
        }

        return multiplied;
    }
}
