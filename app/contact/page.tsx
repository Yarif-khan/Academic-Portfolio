import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-xl mb-6">
        I'm always open to collaborations, discussions, or questions about my research. Feel free to reach out using the
        form below or connect with me on social media.
      </p>
      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" placeholder="Your email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <Textarea id="message" placeholder="Your message" />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  )
}

