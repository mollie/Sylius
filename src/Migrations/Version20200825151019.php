<?php

declare(strict_types=1);

namespace BitBag\SyliusMolliePlugin\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20200825151019 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bitbag_mollie_configuration ADD default_category INT DEFAULT NULL');
        $this->addSql('ALTER TABLE bitbag_mollie_configuration ADD CONSTRAINT FK_23CC85048298F FOREIGN KEY (default_category) REFERENCES bitbag_mollie_product_type (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_23CC85048298F ON bitbag_mollie_configuration (default_category)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bitbag_mollie_configuration DROP FOREIGN KEY FK_23CC85048298F');
        $this->addSql('DROP INDEX UNIQ_23CC85048298F ON bitbag_mollie_configuration');
        $this->addSql('ALTER TABLE bitbag_mollie_configuration DROP default_category');
    }
}
