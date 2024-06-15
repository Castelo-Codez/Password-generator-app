<script setup>
import {ref, watch} from "vue";
import {$NmbrOfRange} from "@/store/store";
const $lis = ref([]);
const $strengthType = ref("");
watch(
    $NmbrOfRange,
    (newNum) => {
        $lis.value.forEach(($li) => {
            $li.style.backgroundColor = "";
        });
        if (newNum <= 10) {
            $strengthType.value = "Weak";
            $lis.value.filter(($li, index) => {
                index == 0 ? ($li.style.backgroundColor = `red`) : "";
            });
        } else if (newNum > 10 && newNum <= 20) {
            $lis.value.filter(($li, index) => {
                if (index === 3) {
                    return;
                } else {
                    $strengthType.value = "Medium";
                    $li.style.backgroundColor = `orange`;
                }
            });
        } else {
            $lis.value.forEach(($li) => {
                $li.style.backgroundColor = "#a4ffaf";
                $strengthType.value = "Strong";
            });
        }
    },
    {
        immediate: true,
    }
);
</script>
<template>
    <section
        aria-label="Strength container"
        class="bg-primary-verydarkgrey p-5 flex justify-between items-center"
    >
        <span aria-label="strength word" class="uppercase text-primary-grey">
            Strength
        </span>
        <div aria-label="charts container" class="flex items-center gap-x-5">
            <span
                aria-label="strength type"
                class="uppercase text-[1.3rem] text-primary-offwhite"
                >{{ $strengthType }}</span
            >
            <ul
                aria-label="list of charts"
                role="list"
                class="flex gap-x-1 items-center"
            >
                <li
                    role="listitem"
                    aria-label="chart"
                    class="w-[10px] h-[30px] border border-primary-offwhite"
                    v-for="n in 4"
                    ref="$lis"
                ></li>
            </ul>
        </div>
    </section>
</template>
