export type props = {
    id: string;
};

const DetailNew = ({ id }: props): React.ReactElement => {
    return (
        <>
            <h1 className="tex-red-500">hello {id}</h1>
        </>
    );
};

export default DetailNew;
