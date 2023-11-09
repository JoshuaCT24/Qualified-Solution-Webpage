export class GlobalAppUrls {
  public Client = {
    Auth: {
      SignIn: "/sign-in",
      SignUp: "/sign-up",
    },
    AboutUs: "/About-us",
    Careers: "/Careers",
    Contact: "/Contact",
    Home: "/Home",
    Services: "/Services",
    TermsConditions: "/Terms-conditions",
  };

  public Server = {
    Auth: {
      SignIn: "/api/login",
      SignUp: "/api/register",
    },
  };
}
export const AppUrls = new GlobalAppUrls();
