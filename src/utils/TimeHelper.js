import moment from 'moment';

export default function getDuration(time) {
	const now = moment();
    const createdAt = moment(time, moment.ISO_8601);
    const duration = moment.duration(now.diff(createdAt)).humanize();

    return `${duration} ago`;
}