import { useGetPlanQuery } from '@/services/plan';
import { useParams } from 'react-router-dom';

const PlanPage = () => {
  const { planId } = useParams<{ planId: string }>();

  const { data } = useGetPlanQuery(planId || '');

  return (
    <code>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </code>
  );
};

export default PlanPage;
