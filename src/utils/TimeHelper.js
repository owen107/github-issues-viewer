import moment from 'moment';

/**
 * @param {string} time Time for creation 
 * @return {string} duration The duration since the issue opened
 */
export default function getDuration(time) {
	const now = moment();
    const createdAt = moment(time, moment.ISO_8601);
    // Convert the duration to human readable time string
    const duration = moment.duration(now.diff(createdAt)).humanize();

    return `${duration} ago`;
}