import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  age: z.string().min(1, {
    message: "Username must not be empty",
  }),
})

export default function CarbCalculatorPage() {
  const form = useForm();
    <Form>
    <Form form={form}>
    <FormField
      control={form.control}
      name="..."
      render={() => (
        <FormItem>
          <FormLabel />
          <FormControl>
            { /* Your form field */}
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      )}
      </Form>
    </FormProvider>
  )
  )
}