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
  weight: z.string().min(1, {
    message: "Weight must not be empty",
  }),
  workoutIntensity: z.string().min(0.7, {
    message: "Workout intensity must not be empty",
  }),
  workoutDuration: z.string().min(1, {
    message: "Workout duration must not be empty",
  }),

})

export default function CarbCalculatorPage() {
  const form = useForm();
    
}