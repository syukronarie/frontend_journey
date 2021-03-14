function slugGenerator(args: string): string {
  return args.replace(" ", "-").toLowerCase();
}

export default slugGenerator;
