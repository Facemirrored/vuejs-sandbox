export const reverseMixin = {
    data() {
        return {
            reverseText: "Reverse another text."
        }
    },
    computed: {
        reverse() {
            return this.reverseText.split("").reverse().join("");
        }
    }
}