import { useGetPlanQuery } from '@/services/plan';
import { useParams } from 'react-router-dom';

import Card from '@/components/Card';

const PlanPage = () => {
  const { planId } = useParams<{ planId: string }>();

  const { data } = useGetPlanQuery(planId || '');

  return (
    <Card>
      <code>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code>
    </Card>
  );
};

export default PlanPage;
