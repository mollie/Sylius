import OnboardingWizard from './OnboardingWizard';

const handleTourShow = async () => {
	const tour = new OnboardingWizard();
	const url = '/admin/onboarding-wizard/status';
	try {
		const response = await fetch(url);
		const data = await response.json();

		tour.initTour();
		if (data.completed === true) {
			tour.disableTour();
		}
	} catch {
		console.error(error);
	}
};

if (document.querySelector('.js-onboarding-wizard')) {
	handleTourShow();
}
