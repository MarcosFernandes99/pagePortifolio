const scrollSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section?.scrollIntoView({ behavior: "smooth" })
    }
  }

  export default scrollSection