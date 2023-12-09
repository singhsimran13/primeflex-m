import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="shadow-8 md:shadow-2 text-center border-round-sm h-6rem surface-overlay p-3 m-3 flex align-items-center justify-content-center font-bold">shadow-8 on small screen</div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:shadow-2</i> to use a responsive class.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>sm:</td>
                                <td>small screens e.g. phones</td>
                            </tr>
                            <tr>
                                <td>md:</td>
                                <td>medium screens e.g. tablets</td>
                            </tr>
                            <tr>
                                <td>lg:</td>
                                <td>large screens e.g. notebooks</td>
                            </tr>
                            <tr>
                                <td>xl:</td>
                                <td>larger screens e.g monitors</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="shadow-8 md:shadow-2 text-center border-round-sm h-6rem surface-overlay p-3 m-3 flex align-items-center justify-content-center font-bold">shadow-8 on small screen</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
