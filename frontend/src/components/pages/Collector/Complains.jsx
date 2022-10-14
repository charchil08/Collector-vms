import SingleComplain from "./SingleComplain";

export default function Complains({ complains, setComplainStatus }) {
    return (
        <div className="d-flex flex-wrap">
            {complains.map((e, i) => {
                return (
                    <SingleComplain key={i} complain={e} setComplainStatus={setComplainStatus} />

                );
            } )}

        </div>
    );
}
