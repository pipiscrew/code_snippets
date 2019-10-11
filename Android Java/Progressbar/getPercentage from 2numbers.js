	private int getPercentage(String goalI, String goalSUMI) {
		float goal = Float.parseFloat(goalI);
		float goalSUM = Float.parseFloat(goalSUMI);

		float result;

		result = goalSUM * 100 / goal;

		return (int)(Math.round(result));
	}