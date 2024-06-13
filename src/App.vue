<script setup>
import {ref} from "vue";
let $StateOfCopiedPasswordToggle = ref(false);
setTimeout(() => {}, 2000);
function $runCopiedToggle() {
    $StateOfCopiedPasswordToggle.value = !$StateOfCopiedPasswordToggle.value;
    setTimeout(() => {
        $StateOfCopiedPasswordToggle.value = false;
    }, 500);
}
</script>
<template>
    <main
        role="main"
        class="flex justify-center items-center min-h-screen px-4"
    >
        <section
            class="parent w-[500px] min-w-[250px] max-w-[500px] flex flex-col gap-y-6"
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
                    class="w-[85%] sm:w-[90%] block p-5 bg-transparent text-[1.4rem] text-primary-verydarkgrey"
                    id="password"
                />
                <button
                    aria-label="copy password"
                    title="copy the password"
                    aria-controls="password"
                    class="flex-1 group relative after:content-['copied'] after:absolute after:top-[-2rem] after:right-1 after:bg-primary-lightgreen after:px-1 after:rounded-lg after:opacity-0 after:transition after:duration-100"
                    :class="[
                        $StateOfCopiedPasswordToggle
                            ? ' after:opacity-100'
                            : 'after:opacity-0',
                    ]"
                    @click="$runCopiedToggle"
                >
                    <svg
                        class="w-8 h-6 text-gray-800 dark:text-white group-hover:text-primary-lightgreen"
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
        </section>
    </main>
</template>
