#!/usr/bin/env python3

"""
Скрипт для запуска всех тестов PyLite
"""

import sys
import unittest
import os

# Добавляем корневую директорию в путь
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

def run_all_tests():
    """Запускает все тесты"""
    # Создаем загрузчик тестов
    loader = unittest.TestLoader()
    
    # Загружаем все тесты из директории tests
    test_suite = loader.discover('tests', pattern='test_*.py')
    
    # Создаем runner
    runner = unittest.TextTestRunner(verbosity=2)
    
    # Запускаем тесты
    result = runner.run(test_suite)
    
    # Возвращаем код выхода
    return 0 if result.wasSuccessful() else 1

if __name__ == '__main__':
    sys.exit(run_all_tests())
