<script setup>
import {$NmbrOfRange, $password} from "../src/store/store";
import inputRange from "../src/components/InputRange.vue";
import ListOfOptions from "./components/ListOfOptions.vue";
import Strength from "./components/Strength.vue";
import GenerateButton from "./components/Generate.vue";
import {ref} from "vue";
const $passwordInput = ref();
let $StateOfCopiedPasswordToggle = ref(false);
setTimeout(() => {}, 2000);
function $runCopiedToggle() {
    $StateOfCopiedPasswordToggle.value = !$StateOfCopiedPasswordToggle.value;
    setTimeout(() => {
        $StateOfCopiedPasswordToggle.value = false;
    }, 500);
    $passwordInput.value.select();
    $passwordInput.value.setSelectionRange(0, 99999);
    navigator.clipboard.writeText($passwordInput.value.value);
}

</script>
<template>
    <main
        role="main"
        class="flex justify-center items-center min-h-screen px-4"
    >
        <section
            class="parent w-[400px] min-w-[250px] max-w-[400px] flex flex-col gap-y-5"
            aria-label="container section"
        >
            <h1 class="text-primary-grey text-center text-[1.22rem]">
                Password Generator
            </h1>
            <div
                aria-label="see & copy password"
                class="flex bg-primary-darkgrey"
            >
                <input
                    type="text"
                    disabled
                    placeholder="P4$5W0rD!"
                    class="w-[85%] text-primary-offwhite sm:w-[90%] block p-5 bg-transparent text-[1.1rem]"
                    id="password"
                    v-model="$password"
                    ref="$passwordInput"
                />
                <button
                    aria-label="copy password"
                    title="copy the password"
                    aria-controls="password"
                    class="flex-1 group relative after:content-['copied'] after:absolute after:top-[-2rem] after:right-1 after:bg-primary-lightgreen after:px-1 after:rounded-lg after:opacity-0 after:transition after:duration-100 after:text-[0.8rem]"
                    :class="[
                        $StateOfCopiedPasswordToggle
                            ? ' after:opacity-100'
                            : 'after:opacity-0',
                    ]"
                    @click="$runCopiedToggle"
                >
                    <svg
                        class="w-8 h-6 text-primary-lightgreen group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 4v3a1 1 0 0 1-1 1h-3m4 10v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2m11-3v10a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7.87a1 1 0 0 1 .24-.65l2.46-2.87a1 1 0 0 1 .76-.35H18a1 1 0 0 1 1 1Z"
                        />
                    </svg>
                </button>
            </div>
            <div
                aria-label="controllers"
                class="bg-primary-darkgrey p-5 text-[1rem] flex flex-col gap-y-6"
            >
                <div
                    aria-label="length of password"
                    class="text-white flex justify-between flex-wrap gap-y-6 items-center"
                >
                    <span>Character Length</span>
                    <span
                        aria-label="number of characters"
                        class="text-primary-lightgreen text-[1.5rem] block sm:pr-1"
                        >{{ $NmbrOfRange }}</span
                    >
                    <inputRange class="w-full" />
                </div>
                <ListOfOptions />
                <Strength />
                <GenerateButton />
            </div>
        </section>
    </main>
</template>
