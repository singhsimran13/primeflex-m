import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExampleDoc(props) {
    const code = `
    
<div class="card">
    <div class="flex gap-5">
        <div class="relative h-8rem w-8rem bg-cover invert-0" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')">
            <div class="absolute top-50 left-50 bg-white/30 w-3rem h-3rem backdrop-invert-0"></div>
        </div>
        <div class="relative h-8rem w-8rem bg-cover invert" style="background-image: url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')">
            <div class="absolute top-50 left-50 bg-white/30 w-3rem h-3rem backdrop-invert"></div>
        </div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>Use hue-rotate classes to change hue of the element.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex gap-5">
                    <div className="relative h-8rem w-8rem bg-cover" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}>
                        <div className="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-invert-0"></div>
                    </div>
                    <div className="relative h-8rem w-8rem bg-cover" style={{ backgroundImage: "url('https://www.primefaces.org/cdn/primeflex/images/product-placeholder-blue.svg')" }}>
                        <div className="absolute top-50 left-50 bg-white-alpha-40 w-4rem h-4rem -mt-5 -ml-5 backdrop-invert"></div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
