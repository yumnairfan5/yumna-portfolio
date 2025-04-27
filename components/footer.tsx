export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 relative">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left font-medium font-montserrat">
              Designed & Developed by Yumna Irfan <span className="text-red-500">❤</span>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="font-medium font-montserrat">Email: yumnairfan14@gmail.com | Phone: 9381340276</p>
            <p className="text-sm text-muted-foreground mt-2 font-montserrat">
              &copy; {currentYear} Yumna Irfan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
