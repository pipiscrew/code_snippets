using System;
using System.Data.SqlClient;
using System.Threading.Tasks;
using System.Windows.Forms;

public partial class MainForm : Form
{
    private async void button_Click(object sender, EventArgs e)
    {
        using (SqlConnection connection = new SqlConnection("YourConnectionString"))
        {
            await connection.OpenAsync();
            using (SqlTransaction transaction = connection.BeginTransaction())
            {
                try
                {
                    await ExecuteFirstCommandAsync(connection, transaction);
                    await ExecuteSecondCommandAsync(connection, transaction);
                    await ExecuteThirdCommandAsync(connection, transaction);
                    await ExecuteFourthCommandAsync(connection, transaction);

                    transaction.Commit();
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    MessageBox.Show($"An error occurred: {ex.Message}");
                }
            }
        }
    }

    private async Task ExecuteFirstCommandAsync(SqlConnection connection, SqlTransaction transaction)
    {
        using (SqlCommand command = new SqlCommand("YourFirstSqlCommand", connection, transaction))
        {
            // Add parameters if needed
            await command.ExecuteNonQueryAsync();
        }
    }

    private async Task ExecuteSecondCommandAsync(SqlConnection connection, SqlTransaction transaction)
    {
        using (SqlCommand command = new SqlCommand("YourSecondSqlCommand", connection, transaction))
        {
            // Add parameters if needed
            await command.ExecuteNonQueryAsync();
        }
    }

    private async Task ExecuteThirdCommandAsync(SqlConnection connection, SqlTransaction transaction)
    {
        using (SqlCommand command = new SqlCommand("YourThirdSqlCommand", connection, transaction))
        {
            // Add parameters if needed
            await command.ExecuteNonQueryAsync();
        }
    }

    private async Task ExecuteFourthCommandAsync(SqlConnection connection, SqlTransaction transaction)
    {
        using (SqlCommand command = new SqlCommand("YourFourthSqlCommand", connection, transaction))
        {
            // Add parameters if needed
            await command.ExecuteNonQueryAsync();
        }
    }
}

/////////////////////////////////
//transaction per iteration
/////////////////////////////////
private async void button_Click(object sender, EventArgs e)
{
    using (SqlConnection connection = new SqlConnection("YourConnectionString"))
    {
        await connection.OpenAsync();

        for (int i = 0; i < numberOfIterations; i++) // Replace numberOfIterations with your actual loop count
        {
            using (SqlTransaction transaction = connection.BeginTransaction())
            {
                try
                {
                    await ExecuteFirstCommandAsync(connection, transaction);
                    await ExecuteSecondCommandAsync(connection, transaction);
                    await ExecuteThirdCommandAsync(connection, transaction);
                    await ExecuteFourthCommandAsync(connection, transaction);

                    transaction.Commit();
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    MessageBox.Show($"An error occurred in iteration {i}: {ex.Message}");
                }
            }
        }
    }
}
