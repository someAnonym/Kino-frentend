import PersonCard from '@/widgets/PersonCard';
import getServerSideProps from '@/shared/utils/getProps/getProps';

const Person = () => {
  return (
    <>
      <PersonCard></PersonCard>
    </>
  );
};

export default Person;
export { getServerSideProps };
