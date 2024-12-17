import { CardWrapper } from "@/components/auth/cardWrapper"

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form
      </CardWrapper>
  )
}