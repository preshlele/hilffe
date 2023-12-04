"use client";
import { Button, Callout, TextField, Text, Heading } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import z from "zod";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const navigate = useRouter();
  const [error, setError] = useState("");
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IssueForm>({ resolver: zodResolver(createIssueSchema) });
  
  const onSubmit: SubmitHandler<IssueForm> = async (data) => {
    try {
      await axios.post("/api/issues", data);
      navigate.push("/issues");
    } catch (error) {
      setError("An error occured, Try again later");
    }
  };
  return (
    <div>
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" max-w-xl space-y-3 mx-auto relative"
      >
        <Heading size="8" align="center">
          Create Your Ticket
        </Heading>
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        {errors.title && (
          <Text color="red" as="p" size="2">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description && (
          <Text color="red" as="p" size="2">
            {errors?.description.message}
          </Text>
        )}

        <Button type="submit" className="absolute w-full">
          Submit New Issue
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
