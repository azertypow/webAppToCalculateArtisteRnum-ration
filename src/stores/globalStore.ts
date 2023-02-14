import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {OptionOrNumberCalculatorSection} from '../gloabal/CalculatorSection'
import {
    ConditionalValueFromSubsectionOption,
    NumberCalculatorSection,
    NumberCalculatorSubsection,
    OptionCalculatorSection, OptionCalculatorSubsection
} from "../gloabal/CalculatorSection";
import {conditionalLogicSection_5} from "./conditionalLogicSection_5";
import {conditionalLogicSection_4} from "./conditionalLogicSection_4";
import {conditionalLogicSection_3_option_1} from "./conditionalLogicSection_3_option_1";
import {conditionalLogicSection_3_option_2} from "./conditionalLogicSection_3_option_2";
import {conditionalLogicSection_3_option_3} from "./conditionalLogicSection_3_option_3";
import {conditionalLogicSection_8} from "./conditionalLogicSection_8";

const calculatorSection_1 = new OptionCalculatorSection(
    {index : 1, title : 'Subventions', required : true,
help:`
<p>Choisir la catégorie par rapport aux subventions que la structure reçoit par année </p>
<p>Les quatre catégories proposées sont :
<ul>
    <li>Petite&nbsp;: moins de 50 000 CHF</li> 
    <li>Moyenne&nbsp;: entre 50 000 et 250&nbsp;000 CHF</li> 
    <li>Grande&nbsp;: entre 250 000 et 500&nbsp;000 CHF</li>
    <li>Très grande&nbsp;: supérieur à 500&nbsp;000 CHF</li> 
</ul>
<p>Si l’exposition ne se déroule pas dans la totalité de la surface de la structure, alors il convient d’appliquer la catégorie d’espace la plus adaptée à la surface spécifique au sein de la structure.</p>
<p>L'idéal est de remplir ce barème conjointement entre la structure et l'artiste. Si l'artiste remplit seul ce document, choisir l’option qui vous semble la plus probable.</p>
        `}
).addSubSection(
    new OptionCalculatorSubsection({uniqueID: '01', titre: 'Petite', subtitle: '< 50 000 CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '02', titre: 'Moyenne', subtitle: '50K–250K CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '03', titre: 'Grande', subtitle: '250K–500K CHF /année'}),
    new OptionCalculatorSubsection({uniqueID: '04', titre: 'Très grande', subtitle: '> 500K CHF /année'}),
)

const calculatorSection_2 = new OptionCalculatorSection(
        {index : 2, title : 'Exposant·e·x·s', required : true,
help:`
<p>Choisir l'une des options par rapport au nombre de personnes invitées. à exposer. 
</br>N.B&nbsp;: Un collectif d'artistes est considéré dans ce décompte comme une personne. Cocher&nbsp;cependant en toute fin de page la case «collectif d'artistes» pour mettre à jour la somme à percevoir.</p>
`}
    ).addSubSection(
        new OptionCalculatorSubsection({uniqueID: '01', titre: '1 personne'}),
        new OptionCalculatorSubsection({uniqueID: '02', titre: '2 à 6 personnes'}),
        new OptionCalculatorSubsection({uniqueID: '03', titre: '7 personnes ou plus'}, ),
    )

export const useGlobalStore = defineStore('globalStore', {
    state: function () {
        return {
            isACollective: false,
            showFixedResult: true,
            calculatorSections: [
                // ----------
                calculatorSection_1,
                calculatorSection_2,
                // ----------


                // ----------
                new OptionCalculatorSection(
                    {index : 3, title : 'Œuvres', required : true,
help:`
<p>Préciser la nature des œuvres présentées pour l'exposition, selon trois critères possibles. Si différentes oeuvres rentrent dans différentes catégories, choisir l'option la plus avantageuse pour l'artiste.
Les choix des options sont classées de la moins avantageuse à la plus avantageuse financièrement pour l'artiste.</p>

<p>Exemple : Si une exposition regroupe des œuvres déjà existantes et des nouvelles créations d'un artiste, alors c’est la catégorie «conception d'une ou plusieurs nouvelles œuvres» qui est appliquée.</p>
`}
                ).addSubSection(
                    new OptionCalculatorSubsection({
                        uniqueID: '01',
                        titre: 'Œuvre(s) existante(s)',
                        subtitle: undefined,
                        subsectionOptionChangeListener: new ConditionalValueFromSubsectionOption(
                            [
                                calculatorSection_1,
                                calculatorSection_2,
                            ],
                            () => conditionalLogicSection_3_option_1(calculatorSection_1, calculatorSection_2),
                            0,
                        ),
                    }),
                    new OptionCalculatorSubsection(
                        {
                            uniqueID: '02',
                            titre: 'Adaptation d’œuvre(s) existante(s)',
                            subtitle: undefined,
                            subsectionOptionChangeListener: new ConditionalValueFromSubsectionOption(
                                [
                                    calculatorSection_1,
                                    calculatorSection_2,
                                ],
                                () => conditionalLogicSection_3_option_2(calculatorSection_1, calculatorSection_2),
                                0,
                            )
                        },
                    ),
                    new OptionCalculatorSubsection(
                        {
                            uniqueID: '03',
                            titre: 'Conception de nouvelle(s) œuvre(s)',
                            subtitle: undefined,
                            subsectionOptionChangeListener: new ConditionalValueFromSubsectionOption(
                                [
                                    calculatorSection_1,
                                    calculatorSection_2,
                                ],
                                () => conditionalLogicSection_3_option_3(calculatorSection_1, calculatorSection_2),
                                0,
                            )

                        },
                    ),
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 4, title : "Durée de l’exposition", required : true, info : 'Montant forfaitaire supplémentaire par mois au-delà du premier mois',
help:`
<p>La durée minimal de l'exposition est fixée à un mois. 
Pour les expositions qui vont au delà d'un mois, arrondir à l'unité la plus proche.</p>

<p>Exemples :</p>
 
<ul>
    <li> Exposition de 3 semaines = 1 mois</li>
    <li> Exposition de 9 semaines = 2 mois</li>
</ul>
`},
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        '',
                        0,
                        "mois",
                        1,
                    ).setAMultiplier(
                        {
                            value: new ConditionalValueFromSubsectionOption(
                                [
                                    calculatorSection_1,
                                    calculatorSection_2,
                                ],
                                () => conditionalLogicSection_4(
                                    calculatorSection_1,
                                    calculatorSection_2,
                                ),
                            ),
                            text: 'Montant forfaitaire supplémentaire par mois au-delà du premier mois: ',
                            status: "info",
                            unit: "CHF",
                            isActiveIfValueGreaterThan: 1
                        },
                    )
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 5, title : 'Honoraires de réalisation',
help:`
<p>Option 1 : Si le ou les œuvres sont produites par l'artiste, deux possibilités  : 
<ul>
    <li> Soit définir en amont un nombre d'heures nécessaire à la réalisation du travail ainsi que son coût horaire. </li>
    <li> Soit définir en amont un montant forfaitaire </li>
</ul>

<p>Option 2 : Si le ou les oeuvres sont produites par l'artiste + une autre personne morale ou physique, deux possibilités  :  
<ul>
<li> La strucutre rémunère elle-même l'intervenant.e externe et cela n'apparait dans les calculs ci-dessous. Pour la rémunération de l'artiste, faire comme dans l'option 1 </li>
<li> L'artiste rémunère les personnes morales ou physiques employées pour la réalisation de ses pièces. La structure lui octroie un montant forfaitaire, permettant de se rémunérer et de rémunérer les autres personnes. Dans ce cas, prévoir un montant forfaitaire qui comprend la rémunération pour tout le monde. </li></ul>

<p>Option 3 : 
<ul>
<li>Si le ou les oeuvres ne sont pas produites par l'artiste, le coût de production n'entre pas dans le calcul des honoraires de l'artiste et donc n'apparait pas dans ce calculateur. </li></ul>

<p>Dans tous les cas, ces décisions doivent se prendre en accord avec la structure. </p>
`},
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’heures",
                        0,
                        "heures",
                    ).setAMultiplier({
                        text: 'Coût horaire',
                        isEditable: true,
                        unit: 'CHF',
                        value: new ConditionalValueFromSubsectionOption(
                            [
                                calculatorSection_1,
                                calculatorSection_2,
                            ],
                            () => {
                                const newValueAfterChange = conditionalLogicSection_5(
                                    calculatorSection_1,
                                    calculatorSection_2,
                                )
                                console.log(newValueAfterChange)
                                return newValueAfterChange
                            },
                        )
                    })
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        'Forfait de réalisation',
                        0,
                "CHF",
                    )
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 6, title : 'Per Diem',
help:`
<p>Indemnité forfaitaire visant à dédommager l'artiste pour ses frais de repas et de déplacement lors du montage de l'exposition par exemple.</p>

<p>Le nombre de jour se détermine en accord avec la structure.</p>
`},
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "Nombre de jours",
                        0,
                        'jours',
                    ).setAMultiplier({
                        value: 50,
                        text: 'Montant du pier diem: ',
                        unit: 'CHF',
                        status: 'info',
                    }),
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 7, title : 'Montage et transport', required : false, info : "recommandation de 60 CHF/h, minimum 23 CHF/h",
help:`
<p>Lorsque l'artiste se charge du montage et/ou du transport de ses pièces, soit :</p>
 
<ul>
    <li>définir un coût horaire ainsi qu'un nombre d'heures</li>
    <li>définir un forfait</li> 
</ul>

<p>Ces décisions se prennent en accord avec la structure.</p>
`},
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        'nombre d’heures',
                        0,
                    ).setAMultiplier({
                        value: 60,
                        text: 'Coût horaire',
                        isEditable: true,
                        unit: 'heures',
                    })
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 8, title : "Évenement",
help: `<p>Dans le cas ou la structure propose la rédaction de textes par l'artiste, forfait texte pour 1000 frappes. Le nombre d'incidences détermine la longueur du texte produit arrondis au millier de frappes le plus proche.</p>
<ul>Exemples : 
<li>Si le texte produit contient 1312 caractères espaces compris, compter 1 occurence.</li>
<li>Si le texte produit contient 29’979 caractères espaces compris, compter 30 occurences.</li>
</ul>
`},
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’occurences",
                    ).setAMultiplier({
                        value: new ConditionalValueFromSubsectionOption([
                            calculatorSection_1,
                        ], () => conditionalLogicSection_8(calculatorSection_1)),
                        text: "Evénement avec préparation",
                        unit: 'CHF',
                    }),
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’occurences",
                    ).setAMultiplier(
                        {value: 500, text: "Évènement avec préparation"}
                    ),
                ),
                // ----------


                // ----------
                new NumberCalculatorSection(
                    {index : 9, title : "Texte", required : false, info : 'source?',
help:`
<ul>
<li>Événement avec préparation : présentation publique nécessitant un temps de préparation.</li>
<li>Exemples : lecture, conférence, workshop, modération de rencontre, etc.</li>
<li>Événement sans préparation : présentation publique ne nécessitant pas de temps de préparation.</li>
<li>Exemples : présence lors de visite guidée, projection en présence de l’artiste, participation à une table ronde, etc.</li>
</ul>
`}
                ).addSubSection(
                    new NumberCalculatorSubsection(
                        "nombre d’incidences",
                    ).setAMultiplier(
                        {
                            value: 30,
                            text: "Coût forfait text"
                        }
                    ),
                )
                // ----------


            ] satisfies Record<number, OptionCalculatorSection | NumberCalculatorSection>,

            contractSection: {
                values: {
                    'Contrat': {
                        subsections: [
                            {
                                type: 'checkbox',
                                name: "d’exposition",
                                value: false,
                            },
                            {
                                type: 'checkbox',
                                name: "présentation publique",
                                value: false,
                            },
                            {
                                type: 'options',
                                name: "production d’œuvre(s)",
                                options: [
                                    'avec',
                                    'sans',
                                ],
                                value: '',
                            },
                        ],
                    },
                    "entre": {
                        subsections: [],
                    },
                }
            }
        }
    },

    getters: {
        total(): number {
            const multiply = this.isACollective ? 1.5 : 1

            return this.calculatorSections.reduce((previousTotalOfSection, currentSection) => {
                return previousTotalOfSection + (currentSection
                    .subSections as unknown[])
                    .reduce((previousSubsectionValue: number, currentSubsection) => {
                        if(
                            currentSubsection
                            && typeof currentSubsection === 'object'
                            && 'result' in currentSubsection
                        )   return previousSubsectionValue + (currentSubsection.result as number)
                        else return 0
                    }, 0)
            }, 0) * multiply
        }
    },

})
