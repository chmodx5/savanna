<script setup lang="ts">
import { Linkedin, X } from "lucide-vue-next";
</script>

<template>
    <nav class="py-4">
        <div class="container mx-auto flex items-center justify-between">
            <!-- logo -->
            <div>
                <SiteLogo />
            </div>
            <!-- links -->
            <div class="flex items-center gap-2">
                <a
                    href="https://www.linkedin.com/company/savannahtales"
                    target="_blank"
                    class="flex items-center gap-1 hover:text-primary"
                >
                    <span>
                        <Linkedin class="w-4 h-4" />
                    </span>
                    <span class="hidden md:block"> LinkedIn </span>
                </a>
                <a
                    href="https://www.x.com/SavannahTalesHQ"
                    target="_blank"
                    class="flex items-center gap-1 hover:text-primary"
                >
                    <span>
                        <X class="w-4 h-4" />
                    </span>
                    <span class="hidden md:block">Twitter </span>
                </a>
            </div>
        </div>
    </nav>
</template>
