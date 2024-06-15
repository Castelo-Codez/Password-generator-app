<script setup>
import {$reactiveObj, $NmbrOfRange, $password} from "@/store/store";
import {markRaw, ref} from "vue";

function Upper() {
    let $uppercaseLetters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    return $uppercaseLetters[
        Math.floor(Math.random() * $uppercaseLetters.length)
    ];
}
function Lower() {
    let $lowercaseLetters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    return $lowercaseLetters[
        Math.floor(Math.random() * $lowercaseLetters.length)
    ];
}
function Numbers() {
    let $numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return $numbers[Math.floor(Math.random() * $numbers.length)];
}
function Symbols() {
    let $symbols = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "+",
        "-",
        ".",
        "~",
        "|",
        "<",
        ">",
        "=",
        "-",
        "_",
        "/",
        ":",
        ";",
        "?",
        "[",
        "]",
        "{",
        "}",
        "~",
    ];
    return $symbols[Math.floor(Math.random() * $symbols.length)];
}
let $objectOfFunctions = {
    Upper: Upper,
    Lower: Lower,
    Numbers: Numbers,
    Symbols: Symbols,
};

function $generatePassword() {
    $password.value = "";
    let $arr = [];
    for (const [key, value] of Object.entries($reactiveObj)) {
        value ? $arr.push(key) : "";
    }
    for (let i = 0; i < $NmbrOfRange.value; i++) {
        $password.value +=
            $objectOfFunctions[$arr[Math.floor(Math.random() * $arr.length)]]();
    }
}
</script>
<template>
    <button
        @click="$generatePassword"
        aria-label="Generate password"
        role="button"
        class="bg-primary-lightgreen border border-transparent hover:text-primary-lightgreen group hover:border hover:border-primary-lightgreen hover:bg-transparent w-full flex items-center justify-center text-sm font-[600] gap-x-3 uppercase p-3"
    >
        Generate

        <svg
            class="w-6 h-6 text-primary-verydarkgrey group-hover:text-primary-lightgreen"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
            />
        </svg>
    </button>
</template>
