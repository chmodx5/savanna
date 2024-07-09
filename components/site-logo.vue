<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
// import NuxtImg from "@nuxt/image";
</script>

<template>
    <NuxtLink to="/">
        <div class="flex items-center group">
            <!-- logo image -->
            <div class="relative w-14">
                <NuxtImg
                    src="/images/logo.png"
                    alt="logo"
                    width="100%"
                    height="100%"
                />
            </div>
            <!--site name  -->
            <div class="">
                <h1
                    class="font-semibold group-hover:text-primary whitespace-nowrap"
                >
                    Savannah Tales
                </h1>
            </div>
            <div class="ml-1 md:ml-2">
                <Badge class="whitespace-nowrap"> Coming soon </Badge>
            </div>
        </div>
    </NuxtLink>
</template>
