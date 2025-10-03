class Company {
    // Parameters Properties
    constructor(
        private name: string,
        private founded: number,
        private industry: string,
        private kind: string
    ){

    }

    getName(): string {
        return this.name;
    }

    getFounded(): number {
        return this.founded;
    }

    getIndustry(): string {
        return this.industry;
    }

    getKind(): string {
        return this.kind;
    }

    show(): string {
        return `${this.name.padEnd(15, '.')}...${this.founded}`;
    }
}

const companies: Company[] = [
  new Company("Amazon", 1994, "E-Commerce, Cloud", "Internet"),
  new Company("Facebook", 2004, "Social", "Internet"),
  new Company("Alphabet Inc.", 2015, "Cloud", "Internet")
];

console.log( companies[0]?.show() );
console.log( companies[1]?.show() );
console.log( companies[2]?.show() );

console.log("-----");
console.log(
    companies.map(
        (company) => company.show()
    ).join('\n')
);