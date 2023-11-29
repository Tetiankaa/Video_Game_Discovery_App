import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
    <Card height={'200px'}>
        <Skeleton/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
    );
};

export {GameCardSkeleton};