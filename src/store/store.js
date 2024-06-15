import {ref, reactive} from "vue";

let $NmbrOfRange = ref(1);
let $password = ref("");
let $reactiveObj = reactive({
    Upper: false,
    Lower: false,
    Numbers: false,
    Symbols: false,
});

export {$NmbrOfRange, $reactiveObj, $password};
