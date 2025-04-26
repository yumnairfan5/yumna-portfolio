export default function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              Designed & Developed by Yumna Irfan <span className="text-red-500">❤</span>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p>Email: yumnairfan14@gmail.com | Phone: 9381340276</p>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} Yumna Irfan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
