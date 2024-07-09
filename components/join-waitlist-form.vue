<script setup lang="ts">
import { useForm, useResetForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { vAutoAnimate } from "@formkit/auto-animate/vue";

import { Button } from "@/components/ui/button";
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";

const isLoading = ref(false);

const formSchema = toTypedSchema(
    z.object({
        email: z.string().email("Invalid email address").max(50).optional(),
    })
);

const { handleSubmit } = useForm({
    validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
    isLoading.value = true;

    try {
        const response = await $fetch("/api/waitlist", {
            method: "post",
            body: JSON.stringify({
                email: values.email,
            }),
        });

        if (response.statusCode != 200) {
            throw new Error(response.message || "An unknown error occurred");
        } else {
            useResetForm();
            toast({
                variant: "default",
                title: "Success",
                description: "Email added successfully",
            });
        }
    } catch (error: any) {
        console.error("Error:", error.message);
        toast({
            variant: "destructive",
            title: "Error",
            description: "Error creating form",
        });
    } finally {
        isLoading.value = false;
    }
});
</script>

<template>
    <div class="md:w-4/12 mx-auto mt-10">
        <form
            class="flex flex-col md:flex-row items-center gap-4"
            @submit="onSubmit"
        >
            <div class="">
                <FormField v-slot="{ componentField }" name="email">
                    <FormItem v-auto-animate>
                        <FormControl>
                            <Input
                                type="email"
                                placeholder="Email"
                                v-bind="componentField"
                            />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                </FormField>
            </div>
            <div class="">
                <Button class="text-center" :disabled="isLoading" type="submit">
                    <span v-if="isLoading">Loading...</span>
                    <span v-else>Submit</span>
                </Button>
            </div>
        </form>
    </div>
</template>
