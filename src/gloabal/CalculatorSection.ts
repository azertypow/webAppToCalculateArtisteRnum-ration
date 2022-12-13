export type CalculatorSectionType = 'option' | 'number'

export type OptionOrNumberCalculatorSection<T extends OptionCalculatorSection | NumberCalculatorSection> = T extends OptionCalculatorSection
    ? OptionCalculatorSection
    : NumberCalculatorSection;

class CalculatorSection {
    public type?: CalculatorSectionType

    constructor(
        public index: number,
        public title: string,
        public required = false,
        public info?: string,
    ) {
    }
}

export class OptionCalculatorSection extends CalculatorSection {

    private _subSections: OptionCalculatorSubsection[] = []

    private _value?: OptionCalculatorSubsection

    public type: CalculatorSectionType = 'option'

    constructor(public index: number,
                public title: string,
                public required = false,
                public info?: string,
    ) {
        super(index, title, required, info)
    }

    public addSubSection(...subsectionsToAdd: OptionCalculatorSubsection[]): this {
        subsectionsToAdd.forEach(subsection => this._subSections.push(subsection))
        return this
    }

    get subSections(): OptionCalculatorSubsection[] {
        return this._subSections
    }

}

export class NumberCalculatorSection extends CalculatorSection {
    private _subSections: NumberCalculatorSubsection[] = []

    public type: CalculatorSectionType = 'number'

    constructor(public index: number,
                public title: string,
                public required = false,
                public info?: string,
    ) {
        super(index, title, required, info);
    }

    public addSubSection(subsection: NumberCalculatorSubsection): this {
        this._subSections.push(subsection)
        return this
    }

    get subSections(): NumberCalculatorSubsection[] {
        return this._subSections;
    }

    get value(): number {
        return this.subSections.reduce((sumOfPreviousSubsections, currentSubsection) => {
            if (currentSubsection.status !== 'validate') return sumOfPreviousSubsections
            return sumOfPreviousSubsections + currentSubsection.value
        }, 0)
    }
}

export class NumberCalculatorSubsection {

    private _multiplier?: {
        value: number
        text: string
    }

    constructor(
        public text?: string,
        public value = 0,
        public validateValueCheck: (valueToCheck: number) => { testValue: boolean, msg: string } = () => {
            return {
                testValue: true,
                msg: 'Any test'
            }
        },
    ) {

    }

    public get hasMultiplier(): boolean {
        return this._multiplier !== undefined
    }

    public get multiplier() { return this._multiplier }

    public setAMultiplier(value: number, text = ''): this {
        this._multiplier = {
            text,
            value,
        }
        return this
    }

    public get status(): 'empty' | 'validate' | 'error' {
        if (this.value === void (0)) return 'empty'
        if (this.validateValueCheck(this.value)) return 'validate'
        return 'error'
    }

    public get result(): number {
        return this._multiplier ? this._multiplier.value * this.value : this.value
    }
}


export class OptionCalculatorSubsection {

    constructor(
        public titre: string,
        public subtitle?: string
    ) {
    }

}