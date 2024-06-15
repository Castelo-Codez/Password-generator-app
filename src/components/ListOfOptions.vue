<script setup>
import {onMounted} from "vue";
import {$reactiveObj} from "../store/store.js";

onMounted(() => {
    let $allCheckBoxes = document.querySelectorAll("input[type='checkbox']");
    $allCheckBoxes.forEach(($input) => {
        $input.addEventListener("change", (e) => {
            if ($input.checked === true) {
                $input.nextElementSibling.classList.add("checked");
            } else {
                $input.nextElementSibling.classList.remove("checked");
            }
        });
    });
});
</script>
<template>
    <ul role="list" aria-label="list of options">
        <li
            role="listitem"
            class="flex items-center gap-x-2 mb-4"
            aria-label="uppercase"
        >
            <input
                id="uppercase"
                type="checkbox"
                value=""
             
                class="hidden appearance-none"
                v-model="$reactiveObj.Upper"
            />
            <label
                role="form"
                for="uppercase"
                class="cursor-pointer font-medium text-gray-900 dark:text-gray-300 flex items-center gap-x-4"
            >
                <div
                    aria-label="checkbox"
                    role="checkbox"
                    class="w-[20px] h-[20px] border border-primary-offwhite hover:border-primary-lightgreen flex justify-center items-center"
                >
                    <svg
                        width="14"
                        height="12"
                        class="hidden"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke="#18171F"
                            stroke-width="3"
                            fill="none"
                            d="M1 5.607 4.393 9l8-8"
                        ></path>
                    </svg>
                </div>
                <span aria-label="label of checkbox"
                    >Include Uppercase Letters</span
                >
            </label>
        </li>
        <li
            role="listitem"
            class="flex items-center gap-x-2 mb-4"
            aria-label="lowercase"
        >
            <input
                id="lowercase"
                type="checkbox"
                
                value=""
                v-model="$reactiveObj.Lower"
                class="appearance-none hidden"
            />
            <label
                for="lowercase"
                class="cursor-pointer font-medium text-gray-900 dark:text-gray-300 flex items-center gap-x-4"
            >
                <div
                    aria-label="checkbox"
                    role="checkbox"
                    class="w-[20px] h-[20px] border border-primary-offwhite hover:border-primary-lightgreen flex justify-center items-center"
                >
                    <svg
                        width="14"
                        height="12"
                        class="hidden"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke="#18171F"
                            stroke-width="3"
                            fill="none"
                            d="M1 5.607 4.393 9l8-8"
                        ></path>
                    </svg>
                </div>

                <span aria-label="label of checkbox"
                    >Include Lowercase Letters</span
                ></label
            >
        </li>
        <li
            role="listitem"
            class="flex items-center gap-x-2 mb-4"
            aria-label="numbers"
        >
            <input
                v-model="$reactiveObj.Numbers"
                id="Numbers"
                type="checkbox"
                value=""
              
                class="appearance-none hidden"
            />
            <label
                for="Numbers"
                class="cursor-pointer font-medium text-gray-900 dark:text-gray-300 flex items-center gap-x-4"
            >
                <div
                    aria-label="checkbox"
                    role="checkbox"
                    class="w-[20px] h-[20px] border border-primary-offwhite hover:border-primary-lightgreen flex justify-center items-center"
                >
                    <svg
                        width="14"
                        height="12"
                        class="hidden"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke="#18171F"
                            stroke-width="3"
                            fill="none"
                            d="M1 5.607 4.393 9l8-8"
                        ></path>
                    </svg>
                </div>

                <span aria-label="label of checkbox"
                    >Include Numbers
                </span></label
            >
        </li>
        <li
            role="listitem"
            class="flex items-center gap-x-2 mb-4"
            aria-label="symbols"
        >
            <input
                v-model="$reactiveObj.Symbols"
                id="Symbols"
              
                type="checkbox"
                value=""
                class="appearance-none hidden"
            />
            <label
                for="Symbols"
                class="cursor-pointer font-medium text-gray-900 dark:text-gray-300 flex items-center gap-x-4"
            >
                <div
                    aria-label="checkbox"
                    role="checkbox"
                    class="w-[20px] h-[20px] border border-primary-offwhite hover:border-primary-lightgreen flex justify-center items-center"
                >
                    <svg
                        width="14"
                        height="12"
                        class="hidden"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke="#18171F"
                            stroke-width="3"
                            fill="none"
                            d="M1 5.607 4.393 9l8-8"
                        ></path>
                    </svg>
                </div>

                <span aria-label="label of checkbox"
                    >Include Symbols
                </span></label
            >
        </li>
    </ul>
</template>

<style scoped>
label.checked > div {
    background-color: #a4ffaf;
    border: none;
    svg {
        display: block;
    }
}
</style>
